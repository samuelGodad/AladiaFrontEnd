<template>
  <Modal
    padding="0"
  >
  <div class="relative z-10 h-full p-5 text-13">
    <div>
        <div class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95">
            <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path></svg>
            </div> 
            Back to Log in 
        </div>
        <div class="flex flex-col items-center px-4">
            <div data-v-0312d447="" class="mb-4 flex w-full items-end gap-6 px-4">
                <div data-v-0312d447="" class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white">
                    <div data-v-0312d447="" class="gradient absolute inset-0 opacity-20"></div>
                    <img data-v-0312d447="" class="absolute inset-0 h-full w-full rounded object-cover" src="http://localhost:3000/aladia.png">
                    <div data-v-0312d447="" class="absolute inset-0 flex items-end justify-center pb-4"></div>
                    <input data-v-0312d447="" type="file" accept="image/*" class="absolute inset-0 opacity-0">
                </div><div data-v-0312d447="" class="">
                <div data-v-0312d447="" class="mb-1 text-sm font-semibold text-white">Nice to meet you,</div>
                <div data-v-0312d447="" class="text-xs text-white/70">
                    Upload a profile picture <br data-v-0312d447=""> 
                    and complete your <br data-v-0312d447=""> 
                    presentation
                </div>
            </div>
        </div>
        <div class="mb-4 flex items-center gap-2">
            <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white">
                <i class="fa-solid fa-check tex-sm" style="display: none;"></i>
            </div>
            <div class="text-xs text-white/70"> 
                I accept <span class="underline text-white"> Terms &amp; Conditions </span> and <span class="underline text-white"> Privacy Policy </span>
            </div>
        </div>
        <div class="mb-4 text-center text-xs text-white font-semibold">Enter your details</div>
        <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="new-password" type="text"><div class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"> Name 
        </div>
        </div>
            <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                    <i class="fa-solid fa-user text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="new-password" type="text">
                <div class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"> Surname </div>
            </div>
            <div class="group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]">
                <div class="flex w-10 items-center justify-center text-xl">
                    <i class="fa-solid fa-envelope text-base text-black/70"></i>
                </div>
                <input disabled="" maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="new-password" type="text">
            </div>
            <div class="group relative mb-1 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                    <i class="fa-solid fa-key text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none" autocomplete="new-password" type="password" style="--bg-body: white;">
                    <i class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"></i>
                    <div class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"> Password </div>
                </div>
                <div class="flex h-4 w-full items-center justify-between text-xs mb-2">
                <div></div>
                <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
                    <div class="h-full rounded transition-all duration-300 w-0"></div>
                </div>
            </div>
            <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                    <i class="fa-solid fa-key text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none" autocomplete="new-password" type="password" style="--bg-body: white;">
                    <i class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"></i>
                    <div class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"> Confirm Password </div>
                </div>
                <Button
                    text="Enter"
                    padding="8px 0"
                    borderColor="#fff"
                    classes="flex justify-center align-center rounded mb-6 hover:border-white/50"
                    gradient="linear-gradient(15deg,#fff0 9.55%,#fff0 30.28%,#fff6,#fff0 41.58%,#fff0 59.02%,#fff 67.97%,#fff0 74.56%,#fff)"
                />
                <div class="cursor-pointer text-center text-white/40" style="font-size:14px"> Terms &amp; Conditions </div>
        </div>
    </div>
  </div>
  </Modal>
</template>

<script lang="ts" setup>
import {Modal} from "../molecules/modals/index";
import {Card} from "../molecules/cards/index";
import{ Text} from "../atoms/text/index";
import {Button} from "../atoms/button/index";
</script>