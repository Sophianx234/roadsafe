import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Login(){
  return (
    <div className="grid grid-cols-2 ">
      
      <form className=" p-22 overflow-y-hidden h-dvh " >
        <h1 className="font-bold text-center font-bebas text-2xl pb-14">Welcome back</h1>
        <div>
          <p className="font-inter text-center text-sm pb-4">Please enter your details.</p>
          <div>
            <div className="space-y-6">

            <Input placeholder="Email" className="py-6 rounded-2xl"/>
            <Input placeholder="Password" className="py-6 rounded-2xl"/>
            </div>
            <div className="flex items-center pt-6 font-barlow justify-between px-2 text-sm">
              <div className="flex items-center gap-2"><Checkbox/> Remember for 30 days </div>
              <p>forgot password?</p>
            </div>

            <Button className="bg-orange-500 mt-11 w-full py-6 rounded-3xl ">
              Login 
            </Button>
            <div className="flex items-center pt-6 text-sm font-inter px-2 justify-center gap-1">
              <p className="text-gray-500">Don't have an account? </p><span>Sign Up</span>
            </div>
          </div>
        </div>
      </form>
      <div className="relative h-dvh">

      <Image src='/images/car-1.jpg' fill alt="boruto" className="object-cover"/>
      </div>

    </div>
  )
}