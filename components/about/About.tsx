import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import GithubGraph from "./GithubGraph"
import SocialMedia from "./SocialMedia"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="I specialize in crafting high-converting landing pages and websites for SaaS, Web3, and AI startups. With a strong focus on front-end development, I leverage tools like Next.js, React, and Tailwind CSS to create visually stunning and user-friendly experiences. My expertise extends to integrating complex animations using GSAP and Framer Motion, ensuring that each project I work on not only looks good but also feels dynamic and engaging."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="But my skills don't stop at the front end. I have a solid understanding of backend technologies, including Node.js, Express.js, and Prisma, which allows me to build robust and scalable web applications. I’m also experienced in deploying solutions to AWS, utilizing services like S3, EC2, and RDS to ensure high availability and performance."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="My journey in tech is complemented by my passion for AI. I’ve worked with frameworks like TensorFlow and PyTorch, and I enjoy exploring how AI can be integrated into web applications to deliver smarter, more intuitive user experiences."
              delay={2}
            />
            <AnimateParagraph
              paragraph="When I’m not coding, you can find me binge-watching anime, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap. I believe in the power of creativity, whether it's writing clean, efficient code or curating a perfect playlist."
              delay={2.5}
            />
            <AnimateParagraph
              paragraph="Currently, I’m working on some exciting projects that I can't wait to share with you. Whether it’s building the next big thing in tech or collaborating on innovative ideas, I’m always open to new opportunities. Let’s create something amazing together!"
              delay={2.5}
            />
          </div>

          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Frontend Tools" delay={0.5} />

              <AnimateBody
                text="HTML5, CSS3, JavaScript, TypeScript
                      React.js, Next.js, Vue.js
                      Tailwind CSS, MUI (Material-UI), Bootstrap, Shadcn UI
                      GSAP, Framer Motion, Locomotive Scroll
                      Git, GitHub
                      Webpack, Vite.js, Vue.js
                      Styled-Components, Radix UI, Three.js"
                delay={1}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Backend Tools" delay={1.4} />
              <AnimateBody
                text="Node.js, Python, Java, Express.js, PostgreSQL, MySQL, MongoDB, Prisma, RESTful APIs, GraphQL, tRPC,JWT (JSON Web Token), OAuth2,AWS (S3, EC2, RDS, Lambda), Firebase, GitHub Actions."
                delay={1.5}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="AI/ML Tools" delay={1.6} />
              <AnimateBody
                text="Python,TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, OpenAI API, GPT-4, Pandas, NumPy"
                delay={2}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Additional Tools" delay={1.6} />
              <AnimateBody
                text="1. DevOps: Docker, Kubernetes, Terraform
                      2. Collaboration: Jira, Slack, Trello, Notion
                      3. Testing: Jest, Mocha, Chai, Cypress, Selenium"
                delay={2}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <GithubGraph />
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
