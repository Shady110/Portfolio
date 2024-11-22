import Badge from "./badge";
import MyMap from "./MyMap";
import Svg from "./Svg";

function Contacts() {
  return (
    <>
      <Badge
        text={
          <>
            <Svg
              path={
                "M175-161q-34 15-64-5.5T81-223v-148l375-111L81-592v-147q0-36 30-56.5t64-6.5l607 258q41 18 41 63t-41 62L175-161Z"
              }
            />{" "}
            Contact
          </>
        }
      />

      <section className="flex flex-col gap-5 justify-center items-center py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full gap-5">
          <a
            href="tel:+201008951156"
            className="stats text-start w-full lg:w-1/2 p-5 flex justify-start gap-5 items-center rounded-3xl"
          >
            <i class="fa-solid fa-phone"></i>
            <h2 className="border-transparent font-medium md:text-2xl">
              +201008951156
            </h2>
          </a>
          <a
            href="mailto:shaadygamal@gmail.com"
            className="stats text-start w-full lg:w-1/2 p-5 flex justify-start gap-5 items-center rounded-3xl"
          >
            <i class="fa-solid fa-at"></i>
            <h2 className="border-transparent font-medium md:text-xl">
              shaadygamal@gmail.com
            </h2>
          </a>
        </div>

        <div className="w-full h-72 flex justify-center">
          <MyMap />
        </div>
      </section>
    </>
  );
}

export default Contacts;
