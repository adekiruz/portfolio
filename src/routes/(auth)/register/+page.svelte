<div class="flex flex-col items-center justify-center">
	<div class="mb-8">
		<h2 class="mt-6 text-center text-3xl font-extrabold">Register your account</h2>
		<p class="mt-2 text-center text-sm">
			Or
			<a href="/login" class="font-medium underline"> Login here </a>
		</p>
	</div>

	<div class="bg-stone-50 dark:bg-surface-700 py-8 px-10 rounded shadow max-w-sm">
		<form class="space-y-6" action="#" method="POST">
			<div>
				<label for="name" class="label text-sm font-medium text-gray-700 dark:text-stone-50">
					Name
				</label>
				<div class="mt-1">
					<input
						id="name"
						name="name"
						type="text"
						autocomplete="name"
						required
						class="input text-sm bg-inherit border-gray-300"
						placeholder="Enter your name"
					/>
				</div>
			</div>

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

			<div>
				<label for="re_password" class="label text-sm font-medium text-gray-700 dark:text-stone-50">
					Confirm Password
				</label>
				<div class="mt-1">
					<input
						id="re_password"
						name="re_password"
						type="password"
						autocomplete="current-password"
						required
						class="input text-sm bg-inherit border-gray-300"
						placeholder="Enter your password again"
					/>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<label for="accept_term" class="flex items-center space-x-2">
						<input id="accept_term" name="accept_term" type="checkbox" class="checkbox" />
						<p class="text-sm prose dark:prose-invert">
							I have read and agree to the <a href="">Privacy Policy</a> and
							<a href="">Terms and Conditions</a>.
						</p>
					</label>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="btn bg-secondary-500 w-full py-2 px-4 font-medium rounded text-sm text-stone-50"
				>
					Sign up
				</button>
			</div>
		</form>

		<div class="mt-6">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-300 dark:border-surface-500" />
				</div>
				<div class="relative flex justify-center">
					<span
						class="rounded px-2 bg-white dark:bg-surface-500 border dark:border-surface-500 border-gray-300 text-sm text-gray-500 dark:text-surface-50"
					>
						Or sign up with
					</span>
				</div>
			</div>

			<div class="mt-6 grid grid-cols-3 gap-3">
				<div>
					<a
						href=""
						class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
					>
						<img class="h-5 w-5" src="/facebook.svg" alt="" />
					</a>
				</div>
				<div>
					<a
						href=""
						class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
					>
						<img class="h-5 w-5" src="/twitter.svg" alt="" />
					</a>
				</div>
				<div>
					<a
						href=""
						class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-medium bg-white dark:bg-surface-200"
					>
						<img class="h-5 w-5" src="/google.svg" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
