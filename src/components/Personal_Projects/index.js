import React from 'react';

const Personal_Projects = () => (
	<article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-briefcase' />
			Personal Projects
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
				Recipe API | Java Spring Boot, GraphQL, PostgresSQL
				</div>
				<div className = 'date'>
					<div className = 'from'>
						
					</div>
					<div className = 'to'>
						
					</div>
				</div>
			</div>
			<div className = 'employer'>
				
			</div>
			<ul>
				<li>
				Developed a Spring Boot API with GraphQL for managing recipe data, allowing users to add, update, and query recipes.
				</li>
				<li>
				Utilized PostgreSQL to store recipe data, implementing efficient database queries to handle complex data relationships.
				</li>
				<li>
				Applied GraphQL queries and mutations to create a flexible and efficient API for interacting with recipe data.
				</li>
				<li>
				Gained hands-on experience with backend development, including API design, data modeling, and integration with a relational database.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Optimal National Park Bike Path Algorithm | Java
				</div>
				<div className = 'date'>
					<div className = 'from'>
					
					</div>
					<div className = 'to'>
						
					</div>
				</div>
			</div>
			<div className = 'employer'>
			
			</div>
			<ul>
				<li>
          Developed a pathfinding algorithm in Java to compute optimal bike paths through a 
          hexagonal chamber system, prioritizing safety and efficiency.
				</li>
				<li>
          Implemented a custom stack data structure using doubly linked lists to track navigation paths.
				</li>
				<li>
          Designed and coded logic for selecting the best routes based on chamber lighting and treasure placement, 
          using advanced data structures and decision-making algorithms.
				</li>
			</ul>
		</div>

  </article>
);

export default Personal_Projects;
