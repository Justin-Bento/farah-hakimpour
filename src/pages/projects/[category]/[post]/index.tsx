import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function ProjectPost() {
  return (
    <>
    <Appbar />
    <main className="p-4 my-32 wrapper sm:p-0">
      <section className="space-y-3">
        <h1 className="headline-large">Lorem ipsum dolor sit amet.</h1>
        <p className="body-large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga libero aliquid facilis, voluptatem consequuntur quaerat odio ex corporis asperiores distinctio amet neque odit quos deleniti ab nemo praesentium nesciunt.</p>
      </section>
    </main>
    <Footer />
    </>
  )
}