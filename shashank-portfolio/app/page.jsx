import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Analytics } from '@vercel/analytics/next';


const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Shashank Singh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Software Developer specialized in Big Data at JP Morgan Chase & Co., building scalable solutions with Kafka, Hadoop, Spark, and Hive. A Computer Science graduate from NIT Bhopal, I am proficient in Java, Shell, C++, Unix, and Spring Boot, with expertise in ETL, SQL, NoSQL (Cassandra), and AWS S3. Skilled in Control-M, Jenkins, Grafana, Splunk, Git, and Bitbucket, I thrive in Agile environments, leveraging AI for impactful projects.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/Shashank_Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-accent uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

<Analytics />

export default Home;

