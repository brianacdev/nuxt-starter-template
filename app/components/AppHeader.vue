<script setup lang="ts"></script>

<template>
	<nav class="bg-white shadow">
		<UContainer>
			<div class="flex h-16 justify-between">
				<div>
					<!-- Left side of nav -->
				</div>
				<div class="flex items-stretch justify-center space-x-3">
					<NuxtLink to="/" class="nav-link"> Home </NuxtLink>
					<NuxtLink to="/about" class="nav-link"> About </NuxtLink>
					<NuxtLink to="/contact" class="nav-link">
						Contact
					</NuxtLink>
				</div>
				<div>
					<!-- Right side of nav -->
				</div>
			</div>
		</UContainer>
	</nav>
</template>
