import React from 'react'
import PagerView from 'react-native-pager-view'
import FormDocuments from '../components/forms/FormDocuments';
import FormEndereco from '../components/forms/FormEndereco';

export default function SingUp() {

  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <FormDocuments keyId={0} />
      <FormEndereco keyId={1} />
    </PagerView>
  )
}