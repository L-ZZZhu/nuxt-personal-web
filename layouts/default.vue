<template>
    <div>
        <header class="bg-blue-500 text-white p-4 text-center">
            <h1>全局头部</h1>
        </header>
        <slot />
        <footer class="bg-gray-800 text-white p-4 text-center mt-4">
            <p>全局底部</p>
        </footer>
    </div>
</template>