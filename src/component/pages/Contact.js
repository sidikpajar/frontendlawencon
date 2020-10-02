import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { fetchContact,fetchContactDelete } from '../../redux'
import Button from '@material-ui/core/Button';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  async componentDidMount(){
    await this.props.fetchContact()
  }

  getDetail = async (id) => {
    this.props.history.push({
      pathname: '/ContactDetail/' + id});
  }

  getDelete = (id) => {
    this.props.fetchContactDelete(id)
  }

  goToAddContact = async () =>{
    await this.props.history.push({
      pathname: '/ContactAdd'});
  }


  goToUpdateContact = async (row) =>{
    const { id } = row
    console.log(id);
    await this.props.history.push({
      pathname: `/ContactUpdate/${id}`,
      data: row});
  }

  render() {
    const {contactData} = this.props;
    console.log(contactData)
    return (
      <Container style={{marginTop:100}}>
        <Button onClick={() => this.goToAddContact()} style={{marginBottom:'10px'}} variant="contained" color="primary">
          Add Contact
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.firstName}</TableCell>
                  <TableCell align="left">{row.lastName}</TableCell>
                  <TableCell align="left">{row.age}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => this.getDetail(row.id)} style={{marginRight:'5px'}} variant="contained" color="primary">
                      Detail
                    </Button>
                    <Button onClick={() => this.goToUpdateContact(row)}  style={{marginRight:'5px'}} variant="contained" color="secondary">
                      Change
                    </Button>
                    <Button onClick={() => this.getDelete(row.id)} variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </TableContainer>
      </Container>
    )
  }
}


const MapStateToProps = (state) => {
  return {
    // contactData: state.contact.content.data ? state.contact.content.data.data : [],
    contactData: state.contact.contact.data ? state.contact.contact.data.data :[],
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => dispatch(fetchContact()),
    fetchContactDelete: (params) => dispatch(fetchContactDelete(params)),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Contact)
