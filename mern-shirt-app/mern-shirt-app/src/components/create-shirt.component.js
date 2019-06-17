import React, { Component } from 'react';


export default class CreateShirt extends Component {


	constructor(props) {
			super(props);

			this.onChangeShirtBand = this.onChangeShirtBand.bind(this);
			this.onChangeShirtTour = this.onChangeShirtTour.bind(this);
			this.onChangeShirtYear = this.onChangeShirtYear.bind(this);
			this.onChangeShirtColor = this.onChangeShirtColor.bind(this);
			this.onChangeShirtBrand = this.onChangeShirtBrand.bind(this);
			this.onChangeShirtAuthenticity = this.onChangeShirtAuthenticity.bind(this);

			this.onSubmit = this.onSubmit.bind(this);


			this.state = {
					shirt_band: '',
					shirt_tour: '',
					shirt_year: '',
					shirt_color: '',
					shirt_brand: '',
					shirt_authenticity: ''

			}
		}


				onChangeShirtBand(e) {
					this.setState({
						shirt_band: e.target.value
					});

				}
				onChangeShirtTour(e) {
					this.setState({
						shirt_tour: e.target.value
					});

				}
				onChangeShirtYear(e) {
					this.setState({
						shirt_year: e.target.value
					});

				}
				onChangeShirtColor(e) {
					this.setState({
						shirt_color: e.target.value
					});

				}
				onChangeShirtBrand(e) {
					this.setState({
						shirt_brand: e.target.value
					});

				}
				onChangeShirtAuthenticity(e) {
					this.setState({
						shirt_authenticity: e.target.value
					});

				}



				onSubmit(e) {
					e.preventDefault();

					//for debug add console logs

					this.setState ({
					shirt_band: '',
					shirt_tour: '',
					shirt_year: '',
					shirt_color: '',
					shirt_brand: '',
					shirt_authenticity: ''

					})
				}


		



	render () {
		return (
		<div style={{marginTop: 10}}>

		<h3> Add New Shirt </h3>

		<form onSubmit={this.onSubmit}>
			<div className="form-group">
				<label>Band: </label>
				<input type="text"
						className="form-control"
						value={this.state.shirt_band}
						onChange={this.onChangeShirtBand}
						/>
				</div>

			

		
			<div className="form-group">
				<label>Tour: </label>
				<input type="text"
						className="form-control"
						value={this.state.shirt_tour}
						onChange={this.onChangeShirtTour}
						/>
				</div>


				<div className="form-group">
				<label>Year: </label>
				<input type="text"
						className="form-control"
						value={this.state.shirt_year}
						onChange={this.onChangeShirtYear}
						/>
				</div>


				<div className="form-group">
				<label>Color: </label>
				<input type="text"
						className="form-control"
						value={this.state.shirt_color}
						onChange={this.onChangeShirtColor}
						/>
				</div>


				<div className="form-group">
				<label>Brand: </label>
				<input type="text"
						className="form-control"
						value={this.state.shirt_color}
						onChange={this.onChangeShirtColor}
						/>
				</div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="authenticityOptions" 
                                    id="authenticityAuthentic"
                                    value="Authentic"
                                    checked={this.state.shirt_authenticity==='Authentic'} 
                                    onChange={this.onChangeShirtAuthenticity}
                                    />
                            <label className="form-check-label">Authentic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="authenticityOptions" 
                                    id="authenticityBootleg" 
                                    value="Bootleg" 
                                    checked={this.state.todo_priority==='Bootleg'} 
                                    onChange={this.onChangeShirtAuthenticity}
                                    />
                            <label className="form-check-label">Bootleg</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="authenticityOptions" 
                                    id="authenticityReproduction" 
                                    value="Reproduction" 
                                    checked={this.state.todo_priority==='Reproduction'} 
                                    onChange={this.onChangeShirtAuthenticity}
                                    />
                            <label className="form-check-label">Reproduction</label>
                        </div>
                    </div>







			</form>
		</div>
		)
	}
}