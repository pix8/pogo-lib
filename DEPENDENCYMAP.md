# Dependency mapping

Keeping tabs on the dependency tree so I know what's using what and can hopefully keep things from getting out of control or unintentionally make breaking changes.

## Rollup.js
	rollup
		rollup-plugin-alias
		rollup-plugin-includepaths
		rollup-plugin-node-resolve
		rollup-plugin-commonjs
		rollup-plugin-babel
			@babel/core
				@babel/preset-env
				@babel/preset-react
				@babel/plugin-external-helpers
				@babel/plugin-transform-runtime
		rollup-plugin-vue
			vue-template-compiler
		rollup-plugin-pug
			pug * double-check what is using this
		rollup-plugin-scss
			node-sass
		rollup-plugin-postcss
		rollup-plugin-url
		rollup-plugin-json
		chokidar

## Storybook (based on webpack)
	@storybook/react
		babel-loader
			@babel/core
				@babel/preset-env
				@babel/preset-react			
	@storybook/vue
		babel-loader
			@babel/core
				@babel/preset-env
				babel-preset-vue *strictly speaking this pack is not needed as other standard presets will cover the bases but declared in their babel config nevertheless
		vue-loader
			vue-template-compiler
		pug-plain-loader * double-check what is using this

## Jest
	jest
		babel-jest
		babel-core: ^7.0.0-bridge.0