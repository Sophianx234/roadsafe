"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter() {
  return (
    <section className="bg-blue-700 text-white py-16 px-4 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bebas sm:text-4xl font-semibold leading-tight">
          Everything you need <br />
          in <span className="relative inline-block">
            <span className="">one place</span>
          </span>
        </h1>

        <form className="  ">
          <div className="relative items-center flex h-14 ">

          <Input
            type="email"
            placeholder="Enter email address"
            className="size-full bg-white  text-black rounded-3xl indent-2"
            />
          <Button className="bg-orange-400 text-white hover:bg-lime-500 font-semibold px-6 right-3 absolute py-5 rounded-xl">
            Get started
          </Button>
            </div>
        </form>
      </div>
    </section>
  );
}
