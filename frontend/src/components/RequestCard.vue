<script>
import api from '@/services/api';

export default {
    data() {
        return {
            requests: []
        }
    },
    async mounted() {
        try {
            const response = await api.get("/request")
            this.requests = response.data
        } catch (error) {
            console.error("Failed fetching requests")
            alert("Unable to load requests")
        }
    }
} 
</script>

<template>
    <ul class="requestcard">
        <li v-for="(request, index) in requests" :key="index">
            <strong>Product:</strong> {{ request.product }} <br> 
            <strong>Problem:</strong> {{ request.problem }} <br> 
            <strong>description:</strong> {{ request.description }}
        </li>
    </ul>
</template>

<style scoped>
.requestcard {
    list-style-type: none;
}

.li {
    margin-bottom: 1rem;
}
</style>