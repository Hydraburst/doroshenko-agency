import React, { useState, useRef } from 'react';
import styles from './Documents.module.scss';
import leftArrow from '../../assets/icons/arrowLeft_icon.svg';
import rightArrow from '../../assets/icons/arrowRight_icon.svg';
import Document from '../DocumentItem/DocumentItem';

export const Documents = () => {
  const [documentNumbers, setDocumentNumbers] = useState(
    Array.from({ length: 22 }, (_, i) => i + 1),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 20;
  const documentListRef = useRef(null);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(documentNumbers.length / documentsPerPage),
      ),
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const deleteDocument = (numberToRemove) => {
    setDocumentNumbers((prevNumbers) =>
      prevNumbers.filter((number) => number !== parseInt(numberToRemove)),
    );
  };

  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocuments = documentNumbers.slice(
    indexOfFirstDocument,
    indexOfLastDocument,
  );

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.documentsWrap}>
        <div className={styles.navigation}>
          <h2 className={styles.title}>Documents</h2>
          <div className={styles.arrows}>
            <img
              src={leftArrow}
              alt="left"
              onClick={() => {
                handlePrevPage();
                scrollToRef(documentListRef);
              }}
            />
            <img
              src={rightArrow}
              alt="right"
              onClick={() => {
                handleNextPage();
                scrollToRef(documentListRef);
              }}
            />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.documentList} ref={documentListRef}>
          {currentDocuments.map((number) => (
            <Document key={number} number={number} onDelete={deleteDocument} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Documents;
