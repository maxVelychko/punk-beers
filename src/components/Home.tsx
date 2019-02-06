import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { searchBeers, requestBeersByPage } from "../actions";
import { State, Beer } from "../reducers";
import { ActionTypes } from "../types";

interface ComponentState {
    value: string,
    currentPage: number,
}

interface Props {
    beers: Beer[],
    searchBeers: (beerName: string) => void,
    requestBeersByPage: (page: number) => void,
}

class Home extends React.Component<Props, ComponentState> {
    constructor(props: Props) {
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

    handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        if (this.state.value) {
            this.props.searchBeers(this.state.value);
        }
        event.preventDefault();
    }

    handlePreviousPageClick(): void {
        const previousPage = this.state.currentPage - 1;
        this.setState({ currentPage: previousPage });
        this.props.requestBeersByPage(previousPage);
    }

    handleNextPageClick(): void {
        const nextPage = this.state.currentPage + 1;
        this.setState({ currentPage: nextPage });
        this.props.requestBeersByPage(nextPage);
    }

    render(): React.ReactNode {
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

const mapStateToProps = (state: State) => ({
    beers: state.beers,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
    searchBeers: (beerName: string) => dispatch(searchBeers(beerName)),
    requestBeersByPage: (page: number) => dispatch(requestBeersByPage(page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);