import { render, screen } from '@testing-library/react'
import { Route, useLocation } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import { formatAgo } from '../../util/date'
import VideoCard from '../VideoCard'
import { fakeVideo as video } from '../../tests/videos'
import { withRouter } from '../../tests/utils'

/**
 * @see https://v5.reactrouter.com/web/guides/testing
 */
describe('VideoCard', () => {
  // 구조분해 할당으로 풀어서 작성
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet

  /** MemoryRouter
   * @see https://testing-library.com/docs/example-react-router/
   */
  it('renders video item', () => {
    render(withRouter(<Route path="/" element={<VideoCard video={video} />} />))

    /** screen : 화면을 가져오는 test 라이브러리
     * @see https://testing-library.com/docs/queries/about/#screen
     * screen.getByRole('img')
     * 화면에서, img 역할을 하고 있는 컴포넌트
     *
     * getByRole
     * @see https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries
     */
    const image = screen.getByRole('img')

    /**
     * image의 src에는 url이 있어야 한다.
     * image의 alt에는 title이 있어야 한다.
     */
    expect(image.src).toBe(thumbnails.medium.url)
    expect(image.alt).toBe(title)

    /** getByText, toBeInTheDocument
     * @see https://testing-library.com/docs/bs-react-testing-library/examples/#getbytext
     * @see https://testing-library.com/docs/guide-disappearance/#nottobeinthedocument
     */
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(channelTitle)).toBeInTheDocument()
    expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument()
  })

  /*** 비디오 카드 테스트 - 동적
   *
   */
  it('navigates to detailed video page with video state when clicked', () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>
    }

    render(
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>,
      ),
    )

    const card = screen.getByRole('listitem')
    userEvent.click(card)

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument()
  })
})
