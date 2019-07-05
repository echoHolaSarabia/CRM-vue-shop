<template>
    <div>
        <template>
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <template>
                            <categories-list class="mt-5"></categories-list>
                        </template>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </div>
</template>
 
 <script>
import CategoriesList from '@/components/CategoriesList'

export default {
  components: {
        CategoriesList
    }
}
</script>