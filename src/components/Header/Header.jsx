function Header() {
  return (
    <div>
      <section className="bg-[url(./assets/banner.png)] bg-cover mt-2 rounded-3xl w-11/12 mx-auto text-white bg-no-repeat bg-center relative">
        <div className="text-center space-y-10 py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            End-to-End Travel with <br />{" "}
            <span className="text-green-500">P Paribahan</span>
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            culpa ipsum dolor <br /> sit amet consectetur adipisicing elit.
            Similique, Lorem ipsum dolor sit amet consectetur culpa?
          </p>
          <button className="btn bg-green-300 px-10 font-bold hover:bg-green-600 text-xl">
            Buy Ticket
          </button>
        </div>

        <div className="flex justify-center items-center gap-8 absolute -bottom-16 left-80">
          {/* card one  */}
          <div className="border-4 bg-white rounded-2xl p-5">
            <div>
              <img src="./assets/people.png" alt="" />
            </div>

            <div className="text-black">
              <h1 className="text-5xl font-extrabold">500K</h1>
              <h2 className="font-bold text-2xl">Registered users</h2>
            </div>
          </div>

          {/* card one  */}
          <div className="border-4 bg-white rounded-2xl p-5">
            <div>
              <img src="./assets/people.png" alt="" />
            </div>

            <div className="text-black">
              <h1 className="text-5xl font-extrabold">500K</h1>
              <h2 className="font-bold text-2xl">Registered users</h2>
            </div>
          </div>

          {/* card one  */}

          <div className="border-4 bg-white rounded-2xl p-5">
            <div>
              <img src="./assets/people.png" alt="" />
            </div>

            <div className="text-black">
              <h1 className="text-5xl font-extrabold">500K</h1>
              <h2 className="font-bold text-2xl">Registered users</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
