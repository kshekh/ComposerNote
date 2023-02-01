<script>
  import Logo from "../assets/images/Logo.svg?url";
  import google from "../assets/icons/google.svg?url";
  import Input from "../components/Input.svelte";
  import Password from "../components/Password.svelte";
</script>

<div class="min-w-screen min-h-screen bg-gradient-1 relative flex flex-col">
  <div class="max-w-sm mx-auto w-full px-3 flex flex-1 flex-col py-5 gap-5">
    <div class="flex-1 flex justify-center items-center ">
      <div class="flex-1 flex flex-col space-y-14">
        <!-- logo -->
        <div class="flex justify-center">
          <img src={Logo} alt="logo" class="cursor-pointer" />
        </div>
        <!-- form -->
        <div class="space-y-6">
          <h1
            class="text-xl font-medium text-center leading-none text-white-400"
          >
            Welcome back!
          </h1>
          <div class="p-4 bg-dark-400 rounded-md space-y-4">
            <Input
              type="email"
              id="email"
              label="Email Address"
              labelClass="text-dark-200"
              className="bg-dark-300"
              name="email"
              placeholder="dennyjhons@gmail.com"
            />
            <Password
              id="password"
              label="Password"
              labelClass="text-dark-200"
              className="bg-dark-300"
              name="email"
              placeholder="Password"
            />

            <a
              href="/#"
              class="relative hover:text-white/70 ease-in-out duration-300 text-right block top-1 text-sm leading-none text-white"
              >Forgot Password?</a
            >
            <div class="relative pt-4">
              <button
                class=" bg-white-400 w-full p-4 rounded text-center text-lg leading-none font-semibold cursor-pointer text-dark-400 duration-300 ease-in-out hover:bg-white"
                >Log In</button
              >
            </div>
          </div>
        </div>
        <!-- or section -->
        <div class="space-y-8">
          <div
            class="h-0.5 text-sm text-white font-medium text-center flex items-center justify-center relative after:flex-1 after:h-0.5 after:bg-gradient-2 before:flex-1 before:h-0.5 before:bg-gradient-3"
          >
            <span class="inline-block px-4 relative z-10 -top-px ">or</span>
          </div>
          <div class="flex flex-col justify-center items-center ">
            <img
              src={google}
              alt="google icon"
              class="cursor-pointer w-11 h-11"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom section here -->
     
      <p class="text-sm text-white-100/50 text-center">
        <span>Don’t have an account?</span><a
          href="/#"
          class="ml-2 text-white hover:text-white/70 ease-in-out duration-300"
          >Register now</a
        >
      </p>
    

  </div>
</div>
