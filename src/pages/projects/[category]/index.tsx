import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import GridList from "@/components/GridList";
import ImageCard from "@/components/ImageCard";
import { useRouter } from "next/router";
import { data } from "../../../../lib/data";

export default function index() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Appbar />
      <main className="p-6 my-4 lg:my-16 wrapper sm:p-0">
        <section className="my-8 space-y-1 tracking-wider">
          <h1 className="headline-large">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="body-large">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium necessitatibus aut sequi quis, ex, unde quidem, tenetur
            quibusdam nam animi omnis atque saepe cumque provident? Cum omnis
            vel corporis minus mollitia maxime sit, voluptatibus cumque? Hic
            pariatur molestias, iste accusantium illum vero totam.
          </p>
        </section>
        <GridList Columns="grid-cols-1 md:grid-cols-2">
          {data.map((info: any) => {
            return (
              <ImageCard
                key={info.id}
                Media={info.image}
                Title={info.headline}
                Links={`/projects/${category}/${info.headline.toString().toLowerCase().replace(/\s+/g, "-")}`}
                CardType={false}
              />
            );
          })}
        </GridList>
      </main>
      <Footer />
    </>
  );
}
