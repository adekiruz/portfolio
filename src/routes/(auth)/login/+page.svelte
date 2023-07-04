<div class="min-h-scree flex flex-col justify-center">
	<div class="">
		<h2 class="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
		<p class="mt-2 text-center text-sm">
			Or
			<a href="/register" class="font-medium underline"> create an account </a>
		</p>
	</div>

	<div class="mt-8">
		<div class="dark:bg-surface-700 bg-stone-50 py-8 px-10 rounded shadow">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="label text-sm font-medium text-gray-700 dark:text-stone-50">
						Email address
					</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="input text-sm bg-inherit border-gray-300"
							placeholder="Enter your email address"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="label text-sm font-medium text-gray-700 dark:text-stone-50">
						Password
					</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="input text-sm bg-inherit border-gray-300"
							placeholder="Enter your password"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<label for="remember_me" class="flex items-center space-x-2 text-sm">
							<input id="remember_me" name="remember_me" type="checkbox" class="checkbox" />
							<p>Remember me</p>
						</label>
					</div>

					<div class="text-sm">
						<a href="" class="font-medium underline"> Forgot your password? </a>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="btn bg-secondary-500 w-full py-2 px-4 font-medium rounded text-sm text-stone-50"
					>
						Sign in
					</button>
				</div>
			</form>

			<div class="mt-6">
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-300 dark:border-surface-500" />
					</div>
					<div class="relative flex justify-center">
						<span class="rounded px-2 bg-white dark:bg-surface-500 border dark:border-surface-500 border-gray-300 text-sm text-gray-500 dark:text-surface-50"> Or continue with </span>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-3 gap-3">
					<div>
						<a
							href=""
							class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
						>
							<img
								class="h-5 w-5"
								src="/facebook.svg"
								alt=""
							/>
						</a>
					</div>
					<div>
						<a
							href="#"
							class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
						>
							<img
								class="h-5 w-5"
								src="/twitter.svg"
								alt=""
							/>
						</a>
					</div>
					<div>
						<a
							href="#"
							class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
						>
							<img class="h-5 w-5" src="/google.svg" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
