import pickle
import numpy as np
from seqToNum import convert_to_npArray
import tensorflow as tf
from tensorflow.keras.utils import custom_object_scope

# Define the TransformerBlock if it's a custom layer
class TransformerBlock(tf.keras.layers.Layer):
    def __init__(self, **kwargs):
        super(TransformerBlock, self).__init__(**kwargs)
        # Initialize your custom layer here

    def call(self, inputs, **kwargs):
        # Define the forward pass
        return inputs

# Load the transformer model from the h5 file with custom object scope
with custom_object_scope({'TransformerBlock': TransformerBlock}):
    transformer_model = tf.keras.models.load_model("transformer_model.h5")

with open('scaler_y.pkl', 'rb') as file:
    scaler_y = pickle.load(file)
with open('scaler_x.pkl', 'rb') as file:
    scaler_x = pickle.load(file)

def predictTransformer(sequence):
    seqarr = convert_to_npArray(sequence)
    scaled_new_sequence = scaler_x.transform(seqarr)
    predictions_scaler = transformer_model.predict(scaled_new_sequence)
    predictions = scaler_y.inverse_transform(predictions_scaler)
    predictions = predictions.tolist()
    predictions = predictions[0]
    return predictions

print(predictTransformer("GGCCTGCCGGTTTTGGGGTTCCGGGGTTGGCCGGGGAATTCCCCCGCC"))  # Example usage