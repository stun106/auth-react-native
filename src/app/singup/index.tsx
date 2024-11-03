import React from 'react'
import PagerView from 'react-native-pager-view'
import FormDocuments from '../components/forms/FormDocuments';
import FormEndereco from '../components/forms/FormEndereco';
import SingInSingOut from '../components/SingInSingOut';

export default function SingUp() {

  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <FormDocuments keyId={1} />
      <FormEndereco keyId={3} />
    </PagerView>
  )
}