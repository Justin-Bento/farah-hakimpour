import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Error from "next/error";
import { FunctionComponent } from "react";

type ProjectPostProps = {
  post: string;
};

const ProjectPost: FunctionComponent<ProjectPostProps> = ({ post }) => {
  return (
    <>
      <Appbar />
      <main className="p-4 my-32 wrapper sm:p-0">
        <section className="space-y-3">
          <h1 className="headline-large">
            {post.split("-").join(" ")}
          </h1>
          <p className="body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur fuga libero aliquid facilis, voluptatem consequuntur
            quaerat odio ex corporis asperiores distinctio amet neque odit quos
            deleniti ab nemo praesentium nesciunt.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const { post } = query;
  if (typeof post !== "string") {
    return {
      notFound: <Error statusCode={404} />,
    };
  }
  return {
    props: {
      post,
    },
  };
};

export default ProjectPost