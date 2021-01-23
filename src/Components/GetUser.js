import React from 'react';

import {
  Container,
  Pagination,
  Spinner,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
  Modal,
  Button,
} from 'react-bootstrap';

import '../Styles/App.css';

class GetUsers extends React.Component {
  state = {
    currentPage: 1,
    jobsPerPage: 10,
    searchText: '',
    isOpen: false,
    job: {},
  };

  openModal = (job) => this.setState({ isOpen: true, job: job });

  closeModal = () => this.setState({ isOpen: false });

  componentDidMount() {
    this.setState({ jobs: this.props });
  }

  handleClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) });
  };

  handleChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const { currentPage, jobsPerPage, searchText } = this.state;
    let { jobs } = this.props;
    jobs = jobs.filter((job) => {
      return job.title.toLowerCase().includes(searchText.toLowerCase());
    });

    const indexLastJob = currentPage * jobsPerPage;
    const indexFirstJob = indexLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexFirstJob, indexLastJob);

    const pagination = [];
    for (let i = 1; i < Math.ceil(jobs.length / jobsPerPage); i++) {
      pagination.push(i);
    }

    return (
      <Container className='mt-5'>
        <InputGroup size='sm' className='mb-3'>
          <FormControl
            type='text'
            aria-label='Small'
            value={this.state.searchText}
            onChange={(e) => this.handleChange(e)}
            aria-describedby='inputGroup-sizing-sm'
          />
          <InputGroup.Append>
            <InputGroup.Text id='inputGroup-sizing-sm'>
              Type To Search
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Row>
          {currentJobs.length ? (
            currentJobs.map((val, index) => {
              return (
                <Col key={index} xs='4' className='p-2'>
                  <Card>
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {/* show location only if available */}
                        {val.locationNames
                          ? `Location: ${val.locationNames}`
                          : null}
                      </Card.Subtitle>
                      <Card.Text>Posted On: {val.postedAt}</Card.Text>
                      <Card.Link
                        className='m-1'
                        onClick={() => this.openModal(val)}
                      >
                        Description
                      </Card.Link>
                      <Card.Link target='_blank' href={val.applyUrl}>
                        Apply Here
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Spinner animation='border' role='status' className='center'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          )}
        </Row>
        <Container>
          <Pagination className='mt-4 centered'>
            {pagination.map((pageNo) => {
              return (
                <Pagination.Item
                  key={pageNo}
                  id={pageNo}
                  onClick={this.handleClick}
                  active={pageNo === currentPage}
                >
                  {pageNo}
                </Pagination.Item>
              );
            })}
          </Pagination>
          {this.state.isOpen ? 'hello efrefrgfr' : null}
          {this.state.job ? (
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header>
                <Modal.Title>{this.state.job.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.job.description}</Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={this.closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
        </Container>
      </Container>
    );
  }
}

export default GetUsers;
