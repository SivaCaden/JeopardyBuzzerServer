import './App.scss';

function App() {
	return (
		<div classname="bunger">
			<h1>Jeopardy Buzzer</h1>
			<div id="inputform">
				<input type="text" id="name" placeholder="name" />
				<input type="text" id="code" placeholder="challenge_code" />
				<button classname="join">Join</button>
			</div>

			<div id="endorsements">
				<h2>Endorsements</h2>
				<div id="endorsementList">
					<div classname="endorsement">
						<p>
							Endorser: <span classname="endorser">[Redacted]</span>
						</p>
						<p>
							Endorsement:{' '}
							<span classname="endorsement">
								i cant get enough of this buzzer please
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
