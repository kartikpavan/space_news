import React from 'react';
import SingleArticle from './components/SingleArticle';

const App = () => {
	const [article, setArticle] = React.useState([]);

	async function fetchNews() {
		const response = await fetch(
			'https://api.spaceflightnewsapi.net/v3/articles?_limit=30'
		);
		const data = await response.json();
		console.log(data);
		setArticle(data);
	}

	React.useEffect(() => {
		fetchNews();
	}, []);

	return (
		<div>
			{/* <div class="hero min-h-96 bg-base-200 mb-10">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold">All-in-One Space News Portal</h1>
						<p class="py-6">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatem necessitatibus praesentium modi consequatur aliquid
							blanditiis pariatur dolore illo. Ut, dolorum.
						</p>
					</div>
				</div>
			</div> */}
			<div class="hero h-1/2 bg-hero-pattern">
				<div class="hero-overlay bg-opacity-30"></div>
				<div class="hero-content text-center text-neutral-content">
					<div class="max-w-md">
						<h1 class="mb-5 text-5xl font-bold">
							All in one space News Protal
						</h1>
						<p class="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
			<div className="w-5/6 mx-auto">
				<SingleArticle article={article} />
			</div>
		</div>
	);
};

export default App;
