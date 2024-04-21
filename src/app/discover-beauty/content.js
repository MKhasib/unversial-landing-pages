import { Jersey_10, Open_Sans } from "next/font/google";

const jersey = Jersey_10({
	weight: "400",
	subsets: ["latin"],
});
const openSans = Open_Sans({
	weight: "300",
	subsets: ["latin"],
});
export default function Content(){
    return (
        <div className="mx-32 md:mx-48 lg:mx-64 flex flex-col justify-center items-center gap-4">
        <h1 className={`text-5xl font-bold ` + jersey.className}>
            Discover the beauty around the world
        </h1>
        <p className={openSans.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            in autem provident quas sed ad nostrum mollitia recusandae iste
            exercitationem, doloremque et vero minima laudantium, sapiente itaque
            ducimus a dolorum.
        </p>
        <button
            className={
                openSans.className +
                ` bg-slate-950 text-white px-10 py-3 rounded-2xl hover:bg-slate-300 hover:text-black hover:font-bold`
            }>
            Explore
        </button>
    </div>
    )
}