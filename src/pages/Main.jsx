import React, { Component } from 'react';
import * as Styled from './styles';
import Item from '../components/Item/Item';

import { faSearch, faFrownOpen, faSpinner, faSurprise } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchGiphy } from '../utils';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchImage: [],
      loading: false,
      error: '',
      page: 0,
      isEmpty: false,
    }
  }

  enterKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    this.setState({
      ...this.state,
      error: '',
      loading: true,
      searchImage: [],
      page: 0,
      isEmpty: false,
    }, () => this.getDate());
  }

  getDate = () => {
    const {search, page, searchImage} = this.state;
    searchGiphy(search, page)
      .then(resp => {
        const { data } = resp.data;
        if(searchImage.length === 0 && data.length === 0) {
          this.setState({...this.state, isEmpty: true});
        } else {
          this.setState({ 
            ...this.state, 
            isEmpty: false, 
            searchImage: [...this.state.searchImage, ...data],
            page: this.state.page + data.length + 1,
          })
        }
      })
      .catch(err => this.setState({...this.state, error: 'Something went wrong'}))
      .finally(() => this.setState({...this.state, loading: false}))
  }

  detectScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target
    const bottom = scrollHeight <= scrollTop + clientHeight;
    if(bottom) {
      this.setState({ 
        ...this.state, 
        loading: true, 
      }, () => this.getDate())
    }
  }

  render() {
    return (
      <Styled.Container>
        <h1>Gif Search</h1>
        <Styled.SearchContainer>
          <Styled.Input
            type='text'
            value={this.state.search}
            placeholder="Search Gif..."
            onKeyPress={this.enterKeyPress}
            onChange={(e) => this.setState({...this.state, search: e.target.value })}/>
          <Styled.SearchButton onClick={() => this.handleSubmit()}>
            <FontAwesomeIcon icon={faSearch}/>
          </Styled.SearchButton>
        </Styled.SearchContainer>
        <Styled.Body>
          {this.state.isEmpty ? (
              <Styled.EmptyContainer>
                <Styled.DotBorder>
                  <FontAwesomeIcon icon={faFrownOpen} size={"5x"}/>
                </Styled.DotBorder>
                <Styled.EmptyMessage>Sorry, we could not find gif</Styled.EmptyMessage>
              </Styled.EmptyContainer>
            ) : (
              <Styled.DisplayContainer
                onScroll={this.detectScroll}
                className={this.state.searchImage.length === 0 ? 'none': ''}>
                {this.state.searchImage && this.state.searchImage.length > 0 ? (
                  this.state.searchImage.map((gif, i) => {
                    return (
                      <Item key={i} src={gif.images.downsized.url} alt={gif.title}/>
                    )
                  })
                ): null}
              </Styled.DisplayContainer>
            )}
        </Styled.Body>
        {this.state.loading ? (
              <div>
                <FontAwesomeIcon className="fa-spin" icon={faSpinner} size={'2x'} transform={{ rotate: 100 }}/>
              </div>) : null}
        {this.state.error ? (
          <Styled.ErrorContainer>
            <FontAwesomeIcon className="far" icon={faSurprise} size={'6x'} color="#FFCDD2"/>
            <Styled.ErrorMessage>{this.state.error}</Styled.ErrorMessage>
          </Styled.ErrorContainer>): null}
      </Styled.Container>
    )
  }
}

export default Main