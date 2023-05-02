const convertRCTime = (date) => {
  return moment(date).format('jDD jMMMM jYYYY');
}

{
  (moment(new Date()).format('jDD jMM jYYYY') === moment(msg.date).format('jDD jMM jYYYY') && index === 0 || convertRCTime(array[index - 1]?.date) !== convertRCTime(msg.date)) && (
    <div className={`flex items-center justify-center bg-[#ffffffc7] p-2 w-[10em] mx-auto rounded`}>
      <div>
        {convertRCTime(msg.date)}
      </div>
    </div>
  )
}

// convertRCTime(array[index - 1]?.date) !== convertRCTime(msg.date) --->
// msg_0 : 2023-05-01
// msg_1 : 2023-05-01
// msg_2 : 2023-05-01
// msg_3 : 2023-05-02 --> here is difference against prev msg ==> index === 0 && >> show msg.date
// msg_4 : 2023-05-02
// msg_5 : 2023-05-02
// msg_6 : 2023-05-03 --> here is difference against prev msg ==> index === 0 && >> show msg.date
