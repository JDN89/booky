<script setup lang="ts">
import type { Book } from 'types'
let books = $ref<Book[]>()
onMounted(async () => {
  books = await eventService.getAllBooks().then(response => response.data)
})
/* const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
} */
</script>

<template>
  <div class="flex ">
    //flex the v-for loop vertical
    <div v-for="book in books" :key="book.id" class=" m2">
      <div id="container" class="">
        <div id="author" class="p-2 border-1 border:gray/20">
          {{ book.author }}
          {{ book.pages }}
        </div>
        <div id="pages" class="p-2">
          {{ book.pages }}
        </div>
      </div>
    </div>
  </div>
</template>
