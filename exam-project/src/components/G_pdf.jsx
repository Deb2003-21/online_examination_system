/* eslint-disable react/prop-types */
// src/GeneratePDF.js

import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
// Create styles

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
  },
  text: {
    fontSize: 16,
  },
  text1: {
    fontSize: 12,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
  },
  tableCell: {
    margin: 'auto',
    fontSize: 10,
  },
});

// Create Document Component
const MyDocument = ({data}) => (
  <Document>
  
    <Page size="A4" style={styles.page}>
      <View >
      <Text style={styles.title}>Student Report</Text>
      </View>
     
      <View style={styles.table}>
     
        <Text style={styles.text}>Name: {data.name}</Text>
        <Text style={styles.text1}>Test: {data.pr}</Text>
        <Text style={styles.text1}>Date: {data.date}</Text>
       
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Total questions</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>rights</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>wrongs</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>N.A</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>{data.tqs}</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>{data.rights}</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>{data.mistakes}</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>{data.na}</Text></View>
        </View>
        <View style={styles.title}><Text style={styles.subtitle}>Your Marks: { data.marks}/{data.total} </Text></View>
      </View>
      
    </Page>
  </Document>
);

const G_pdf = () => {

  const loc=useLocation()
  const nav=useNavigate()
  const  rprt= loc.state.rpt;

  const  name= loc.state.name;
  const  email= loc.state.email;
  
  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    setCurrentDate(`${year}-${month}-${day}`);
  }, []);



  const back=()=>
    {
      nav('/studentDashboard',{state:{key2:email}})
    }

  
  const studentData = {
   name: name[0].name,
   date:currentDate,
    marks: rprt[0].score,
    total: rprt[0].total,
    mistakes: rprt[0].wrong,
    rights: rprt[0].right,
    na: rprt[0].np,
    tqs: rprt[0].tqs,
    pr: rprt[0].pr,
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Generate PDF &nbsp;&nbsp;&nbsp;<button className='rounded-md px-1 py-1  bg-purple-500 text-white hover:bg-purple-800 ' onClick={()=>back()}> {'<'}Back</button></h1>
        <PDFViewer width="100%" height="600">
          <MyDocument data={studentData} />
        </PDFViewer>
      </div>
    </div>



  );
};

export default G_pdf;
