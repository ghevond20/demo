import { connect } from 'react-redux'
import AddItemForm from '../components/AddForm'

const mapStateToProps = (state) => ({
  data: state.api.data,
  showForm: state.api.showForm
})

const AddFormContainer = connect(mapStateToProps
)(AddItemForm)

export default AddFormContainer
