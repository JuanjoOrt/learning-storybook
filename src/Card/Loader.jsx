import ContentLoader from 'react-content-loader'

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={400}
    viewBox="0 0 320 400"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="157" cy="95" r="55" />
    <rect x="41" y="248" rx="3" ry="3" width="232" height="11" />
    <rect x="41" y="268" rx="3" ry="3" width="200" height="11" />
    <rect x="41" y="228" rx="3" ry="3" width="200" height="11" />
    <rect x="41" y="208" rx="3" ry="3" width="232" height="11" />
  </ContentLoader>
)

export default Loader
