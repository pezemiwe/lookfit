export const WelcomePage = () => {
  return (
    <section className="bg-[url('/origin.jpg')] bg-center bg-no-repeat bg-cover relative w-full mx-auto h-screen">
      <div className="px-6 absolute top-[132px] max-w-6xl mx-auto">
        <div>
          <h1 className="text-white text-5xl font-extrabold">
            Welcome to <span className="text-theme">My Closet</span>
          </h1>
          <p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
            You can select your favourite clothing match suitable for you from
            your wardrobe just before you wear them.
          </p>
        </div>
      </div>
    </section>
  );
};
