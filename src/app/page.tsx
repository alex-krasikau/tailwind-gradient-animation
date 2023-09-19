export default function Home() {
  return (
    <main className="container mx-auto p-4 lg:p-16">
      <h1 className="text-2xl font-semibold">Tailwind Gradient Animation</h1>

      <div className="mt-16 flex gap-x-16">
        <div>
          <h2 className="text-xl font-medium">Gradient on hover button</h2>

          <button className="mt-4 rounded-lg bg-gray-900 px-6 py-2 text-white hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-500">
            Button
          </button>
        </div>

        <div>
          <h2 className="text-xl font-medium">Animated using before</h2>

          <button className="relative mt-4 rounded-lg bg-gray-900 px-6 py-2 text-white before:absolute before:inset-0 before:block before:rounded-[inherit] before:bg-gradient-to-t before:opacity-0 before:transition before:duration-500 before:ease-out before:from-gray-900 before:to-gray-500 hover:before:opacity-100">
            <span className="isolate">Button</span>
          </button>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Animated using background position
          </h2>

          <button className="mt-4 rounded-lg bg-gradient-to-t bg-[length:200%_200%] bg-bottom px-6 py-2 text-white transition-[background-position] duration-500 ease-out from-gray-900 via-gray-900 to-gray-500 hover:bg-top">
            <span className="isolate">Button</span>
          </button>
        </div>
      </div>

      <div className="mt-16 flex gap-x-16">
        <div>
          <h2 className="text-xl font-medium">Animated using @property</h2>

          <button className="transition-gradient mt-4 rounded-lg bg-gradient-to-t px-6 py-2 text-white duration-500 ease-out from-gray-900 to-gray-900 hover:to-gray-500">
            Button
          </button>
        </div>
      </div>
    </main>
  );
}
