<script setup lang="ts">
interface Icon {
  id: number;
  label: string;
}

const icons: Icon[] = [
  { id: 1, label: "confession 1" },
  { id: 2, label: "confession 2" },
  { id: 3, label: "confession 3" },
  { id: 4, label: "confession 4" },
];
</script>

<template>
  <div
    v-for="i in 8"
    :key="i"
    :aria-hidden="i > 1"
    class="font-poppins mx-20 flex h-90 w-70 flex-col items-center justify-center rounded-md border border-gray-500/20 bg-white p-2 drop-shadow-lg drop-shadow-black/20"
  >
    <div class="flex w-full items-center justify-between px-4">
      <header class=" ">Anonymous</header>
      <header class="text-red-500">0:00</header>
    </div>

    <div class="my-2 h-full w-full rounded-md p-4">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloremque ullam,
        nesciunt voluptatum aliquam qui in sequi totam temporibus corrupti tempore consectetur quam
        nulla quae tenetur officia debitis eum porro?
      </p>
    </div>
    <div class="flex w-full items-center justify-center gap-2">
      <button class="rounded-sm bg-blue-800/80 px-12 py-2">
        <img src="../assets/img/heart.png" alt="" class="h-5 w-5" />
      </button>
      <button class="bg-cherry-rose-500 rounded-sm px-12 py-2">
        <img src="../assets/img/broken-heart.png" alt="" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
