import Image from "next/image";
import img from 'public/IMG_20220528_233021_499.jpg'
export default function Home() {
  return (
   <div>
    <h1>My first Next js Project</h1>
     <Image src={img} alt="img"  width={500}
        height={500}></Image>
   </div>
  );
}
