<script>
import NavBar from './NavBar.vue'
import LoginButton from './LoginButton.vue'
import SigninButton from './SigninButton.vue'
import SearchBar from './SearchBar.vue'

export default {
    components: {
        NavBar,
        LoginButton,
        SigninButton,
        SearchBar
    }
}
</script>

<template>
    <header>
        <nav>
            <NavBar />
        </nav>
        <div class="search">
            <SearchBar />
        </div>
        <h1></h1>
        <div class="user-action">
            <SigninButton />
            <LoginButton />
        </div>

    </header>
</template>

<style scoped>
header {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0px;
}

.user-action {
    display: flex;
    align-items: center;
    
}

.search {
    position: absolute;
    left: 225px;
}

.nav-bar {
    list-style: none;
    display: flex;
    gap: 10px;
}
</style>