import SocialLink from './SocialLink'

const Footer = () => (
  <footer className="bg-secondary relative text-text">
    <div className="p-5 flex justify-center items-center">
      <ul className="flex gap-6">
        <SocialLink
          label="linkedin"
          href="https://www.linkedin.com/in/justin-rivera-330448251/"
        />
        <SocialLink label="github" href="https://github.com/arevirj" />
      </ul>
    </div>
  </footer>
)

export default Footer