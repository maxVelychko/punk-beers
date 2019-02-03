import React from "react";
import { connect } from "react-redux";
import { searchBeers, requestBeersByPage } from "../actions";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            currentPage: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value) {
            this.props.searchBeers(this.state.value);
        }
        event.preventDefault();
    }

    handlePreviousPageClick() {
        const previousPage = this.state.currentPage - 1;
        this.setState({ currentPage: previousPage });
        this.props.requestBeersByPage(previousPage);
    }

    handleNextPageClick() {
        const nextPage = this.state.currentPage + 1;
        this.setState({ currentPage: nextPage });
        this.props.requestBeersByPage(nextPage);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Search for beer" />
                </form>
                <div>
                    <button onClick={this.handlePreviousPageClick} disabled={this.state.currentPage === 1}>previous page</button>
                    <button onClick={this.handleNextPageClick}>next page</button>
                </div>
                <div>
                    {this.props.beers.map(beer => {
                        return (
                            <div key={beer.id}>
                                {beer.name}
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    beers: state.beers,
});

const mapDispatchToProps = (dispatch) => ({
    searchBeers: (beerName) => dispatch(searchBeers(beerName)),
    requestBeersByPage: (page) => dispatch(requestBeersByPage(page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);