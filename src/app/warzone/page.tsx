export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      AAAAAAAAAAAAAAAAAAAAAAAAAA
      <div className=" bg-red-300 h-[100px] w-[200px]">
        <marquee>AaaaaaaaaaaAAAAAAAAAAAaaaAAaaaAAAAAa</marquee>
      </div>
      <div className="h-[300px] w-[300px]">
        <marquee direction="down" width="250" height="200" behavior="alternate">
          <marquee behavior="alternate">#BRING BACK MARQUEE</marquee>
        </marquee>
      </div>
    </main>
  );
}
