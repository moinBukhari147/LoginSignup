import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchDelete = (
  url,
  data,
  shouldStartLoading = false,
  // uuid = '',
  authToken = '',
  cancelRequest = false,
  setCancelReqest = k => k,
  contentType,
) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetch = async () => {
      if (shouldStartLoading && !cancelRequest) {
        setLoading(true);
        setResponse(null);
        setError(null);
        console.log(data,'apiiiiiii');
        await axios({
          url,
          method: 'DELETE',

          headers: {
            'Content-Type': contentType, //'application/json',
            Authorization: authToken,
            Accept: 'application/json',
            // uuid: uuid,
          },
          data,
        })
          .then(resp => {
            const definedObj = {
              status: resp.status,
              data: resp.data,
            };
            setResponse(definedObj);
          })
          .catch(err => {
            console.log(err, 'err');
            const definedObj = {
              status: err.response.status,
              data: err.response.data,
            };
            setResponse(definedObj);
            setError(true);
          })
          .finally(() => {
            setLoading(false);
          });
      } else if (cancelRequest) {
        return () => {
          source.cancel();
          setCancelReqest(false);
        };
      }
    };

    fetch();

    return () => {
      source.cancel();
    };
  }, [shouldStartLoading]);

  return {response, loading, error};
};

export default useFetchDelete;
