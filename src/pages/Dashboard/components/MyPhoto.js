import React, { useState } from 'react';
import { Button, Image, Input } from 'semantic-ui-react';

import { storage, db } from '../../../utils/firebase';
// import 'firebase/storage';

export default function MyPhoto({ id }) {
  const [loading, setLoading] = useState(false);
  // 存放選取的檔案物件
  const [file, setFile] = useState(null);
  // 建立 URL
  const previewImageUrl = file && URL.createObjectURL(file);
  return (
    <div>
      <Image src={previewImageUrl} size="small" />
      {/* as='label' htmlFor 指定此id的Input可透過此按鈕觸發該Input的功能,此例為選擇檔案 */}
      <Button as="label" htmlFor="uploadImage">
        上傳圖片
      </Button>
      {/* 選擇完檔案會觸發onChange事件 */}
      <Input
        type="file"
        id="uploadImage"
        style={{ display: 'none' }}
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

      {file && (
        <Button
          loading={loading}
          onClick={() => {
            setLoading(true);
            const fileRef = storage.ref('post-images/' + id);
            // const fileRef = firebase.storage().ref('post-images/'+id)
            const metadata = {
              contentType: file.type,
            };
            fileRef.put(file, metadata).then(() => {
              fileRef.getDownloadURL().then((imageUrl) => {
                db.collection('balances').doc(id).update({ imageUrl });
                console.log(imageUrl);
                // setOpen(false)
                setLoading(false);
              });
            });
            // console.log(id)
          }}
        >
          送出
        </Button>
      )}
    </div>
  );
}
