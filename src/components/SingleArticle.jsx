import React from 'react';

const SingleArticle = ({ article }) => {
	return (
		<div className="grid grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1">
			{article.map((art) => {
				const { id, title, summary, imageUrl, url } = art;
				return (
					<div key={id} className="rounded-xl shadow-xl overflow-hidden p-4   ">
						<div className="flex flex-col">
							<img
								src={imageUrl}
								alt="sdsds"
								className="w-full h-72 object-cover"
							/>
							<div className="flex-1">
								<h3 className="text-xl font-bold ">{title}</h3>
								<p>
									{summary.substring(0, 150)}{' '}
									<button
										type="button"
										className="text-red-500 font-bold italic"
										onClick={() => (window.location.href = url)}
										formTarget="_blank"
									>
										Read More...
									</button>
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SingleArticle;
