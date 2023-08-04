import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { formatAgo } from '../../util/date'
import VideoCard from '../VideoCard'

/**
 * @see https://v5.reactrouter.com/web/guides/testing
 */
describe('VideoCard', () => {
  const video = {
    id: 1,
    snippet: {
      title: 'title',
      channelId: '1',
      channelTitle: 'channelTitle',
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: 'http://image/',
        },
      },
    },
  }
  // 구조분해 할당으로 풀어서 작성
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet

  /** MemoryRouter
   * @see https://testing-library.com/docs/example-react-router/
   */
  it('renders video item', () => {
    render(
      <MemoryRouter>
        <VideoCard video={video} />
      </MemoryRouter>,
    )

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
})
