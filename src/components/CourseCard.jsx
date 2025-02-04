function CourseCard() {
	return (
		<div className="course-item">
			<div className="course-item__img">
				<img src="/images/img1.jpg" alt="react" />
			</div>
			<div className="course-item__detail">
				<div className="course-item__body">
					<div>
						<p className="title">React js Course</p>
						<p className="desc">The Ultimate React</p>
					</div>
					<span className="rate">4</span>
				</div>
				<div className="course-item__footer">
					<div className="tags">
						<span className="badge badge--danger">React.js</span>
						<span className="badge badge--secondary">Frontend</span>
					</div>
					<div className="caption">
						<div className="date">
							{new Date().toLocaleDateString('en-US', {
								month: 'short',
								year: 'numeric',
								day: 'numeric',
							})}
						</div>
						<span className="badge badge--primary">completed</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
