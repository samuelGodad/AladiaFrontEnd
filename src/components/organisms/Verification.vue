<template>
  <Modal
    padding="0"
  >
    <div class="relative z-10 h-full p-5 text-13">
        <div class="flex flex-col items-center px-6 pt-8">
            <img src="http://localhost:3000/aladia.png" class="mb-2 h-24 w-24 rounded object-cover">
            <div class="mb-4 text-lg font-semibold text-white">adldk lkdjd</div>
            <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
            <div class="mb-20 text-center text-white/70"> Please enter below the 6-digit code we sent you through your registration e-mail: </div>
            <div class="relative mb-4 flex h-10 w-full justify-between text-xl text-black">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
                <input maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
            </div>
            <div class="mb-24 flex w-full justify-center">
                <div class="flex cursor-pointer items-center justify-center text-xs transition-all">
                    <div class="text-white/50">You didn't receive any mail?</div>
                </div>
            </div>
            <Button
                text="Enter"
                padding="8px 0"
                borderColor="#fff"
                classes="flex justify-center align-center rounded mb-6 hover:border-white/50"
                gradient="linear-gradient(15deg,#fff0 9.55%,#fff0 30.28%,#fff6,#fff0 41.58%,#fff0 59.02%,#fff 67.97%,#fff0 74.56%,#fff)"
            />
        </div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import {Modal} from "../molecules/modals/index";
import {Card }from "../molecules/cards/index";
import {Text }from "../atoms/text/index";
import {Button} from "../atoms/button/index";
</script>