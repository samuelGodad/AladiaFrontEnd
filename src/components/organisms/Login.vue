<template>
  <Modal padding="1.25rem 1.25rem 0.5rem 1.25rem">
    <div :class="wrapperClasses">
      <Card
        arrangement="horizontal"
        backgroundColor="#000"
        borderColor="#fff"
        borderThickness="1"
        boxHeight="126"
        boxWidth="372"
        gap="8"
        gradient="linear-gradient(15deg,#fff0 8.33%,#fff0 27.43%,#fff6,#fff0 37.85%,#fff0 53.91%,#fff 62.15%,#fff0 68.23%,#fff 91.67%)"
        gradientOpacity="15"
        icon='<img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" />'
        iconColor="#fff"
        iconSize="200"
        padding="32px 16px"
        radius="4"
        subtitle=" Create or access your account from here"
        title="Welcome to Aladia,"
        boxClasses="mb-6"
        opacity="85"
      />
      <Input
        v-model="username"
        type="text"
        placeholder="Username"
        iconType="svg"
        iconClass="user-icon"
        iconContent="user-icon-content"
        iconAlt="User Icon"
        iconSize="24"
        gap="20"
        padding="8px 0"
        borderColor="#fff3"
        radius="4"
        borderThickness="1"
        textClasses="w-44 text-left"
      />
      <Button
        text="Enter"
        padding="8px 0"
        borderColor="#fff"
        classes="flex justify-center align-center rounded mb-6 hover:border-white/50"
        gradient="linear-gradient(15deg,#fff0 9.55%,#fff0 30.28%,#fff6,#fff0 41.58%,#fff0 59.02%,#fff 67.97%,#fff0 74.56%,#fff)"
      />
      <div class="flex items-center mb-3">
        <div
          class="flex-1 h-px bg-gradient-to-r from-transparent to-white"
        ></div>
        <span class="mx-2 text-white p-2">Or</span>
        <div
          class="flex-1 h-px bg-gradient-to-l from-transparent to-white"
        ></div>
      </div>
      <div class="flex flex-col gap-4 mb-8">
        <Button
          text="Continue with Google"
          icon='<svg class="ml-20" width="20px" height="20px" viewBox="-0.5 0 48 48" fill="#000000"><path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.905-6.051c-.448-1.364-.698-2.82-.698-4.337z" fill="#FBBC05"></path><path d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.511 13.182-9.511z" fill="#EB4335"></path><path d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z" fill="#34A853"></path><path d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.614z" fill="#4285F4"></path></svg>'
          iconSize="24"
          gap="20"
          padding="8px 0"
          borderColor="#fff3"
          radius="4"
          borderThickness="1"
          textClasses="w-44 text-left"
        />
        <Button
          text="Continue with Facebook"
          icon='<svg class="ml-20" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg9" viewBox="0 0 666.66668 666.66717"><defs id="defs13"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath25"><path d="M 0,700 H 700 V 0 H 0 Z" id="path23"/></clipPath></defs><g id="g17" transform="matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"><g id="g19"><g id="g21" clip-path="url(#clipPath25)"><g id="g27" transform="translate(600,350)"><path d="m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0" style="fill:#0866ff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path29"/></g><g id="g31" transform="translate(447.9175,273.6036)"><path d="M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path33"/></g></g></g></g></svg>'
          iconSize="24"
          gap="20"
          padding="8px 0"
          borderColor="#fff3"
          radius="4"
          borderThickness="1"
          textClasses="w-44 text-left"
        />
        <Button
          text="Continue with Apple"
          icon='<svg class="ml-20" width="20px" height="20px" viewBox="-1.5 0 20 20" fill="#000000"><g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#ffffff"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M57.571 7282.193c.729-.845 1.22-2.022 1.086-3.193-.95.04-2.221.671-2.974 1.515-.677.749-1.267 1.946-1.108 3.094 1.172.087 2.368-.57 3.007-1.416zm2.628 7.432c.029 3.027 2.77 4.034 2.8 4.047-.022.071-.438 1.435-1.444 2.845-.87 1.218-1.773 2.431-3.196 2.457-1.398.025-1.848-.794-3.447-.794-1.598 0-2.098.768-3.421.819-1.373.049-2.42-1.318-3.297-2.532-1.794-2.483-3.164-7.017-1.324-10.077.914-1.519 2.547-2.482 4.321-2.506 1.348-.025 2.621.869 3.445.869.824 0 2.371-1.075 3.997-.917.681.027 2.592.263 3.819 1.984-.099.059-2.28 1.275-2.256 3.805z" id="apple-[#173]"></path></g></g></svg>'
          iconSize="24"
          gap="20"
          padding="8px 0"
          borderColor="#fff3"
          radius="4"
          borderThickness="1"
          textClasses="w-44 text-left"
        />
      </div>
      <Text
        text="Terms & Conditions"
        alignment="center"
        color="#fff6"
        classes="cursor-pointer text-center text-white/40"
      />
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Modal } from "../../components/molecules/modals/index";
import { Card } from "../../components/molecules/cards/index";
import { Text } from "../../components/atoms/text/index";
import { Button } from "../../components/atoms/button/index";
import { Input } from "../../components/atoms/input/index";

const wrapperClasses = computed(() => ({
  "pt-8": true,
}));
</script>
