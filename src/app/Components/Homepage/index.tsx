import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <h1>Markdown</h1>
      <Image src="/markdown.svg" alt="Markdown" height={56} width={87} />
    </div>
  );
}
